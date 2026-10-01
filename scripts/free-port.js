import { execSync } from 'node:child_process'

const port = Number(process.argv[2] || 5173)

function listeningPids(targetPort) {
  let output = ''
  try {
    output = execSync('netstat -ano -p tcp', { encoding: 'utf8' })
  } catch {
    return []
  }

  const pids = new Set()
  for (const line of output.split(/\r?\n/)) {
    if (!line.includes('LISTENING')) continue
    const parts = line.trim().split(/\s+/)
    const localAddress = parts[1] || ''
    const pid = parts.at(-1)
    if (!pid || pid === '0' || pid === String(process.pid)) continue
    if (localAddress.endsWith(`:${targetPort}`)) pids.add(pid)
  }
  return [...pids]
}

function isNodeProcess(pid) {
  try {
    const output = execSync(`tasklist /FI "PID eq ${pid}" /FO CSV /NH`, { encoding: 'utf8' })
    return output.toLowerCase().includes('node.exe')
  } catch {
    return false
  }
}

for (const pid of listeningPids(port)) {
  if (!isNodeProcess(pid)) continue
  try {
    execSync(`taskkill /PID ${pid} /F`, { stdio: 'ignore' })
  } catch {
    // The port may already be free if the process exited.
  }
}
