const fs = require('fs');
const path = require('path');
const moment = require('moment');
const random = require('random').default;
const simpleGit = require('simple-git');

const git = simpleGit();
const countArg = Number(process.argv[2] || 1);
const count = Number.isFinite(countArg) && countArg > 0 ? Math.floor(countArg) : 1;

const tasks = [
  'Refactor route naming for readability',
  'Improve README clarity and setup notes',
  'Add/update small test coverage',
  'Clean up controller method comments',
  'Optimize query or validation logic',
  'Tidy front-end asset organization',
  'Add progress note and next action item'
];

const progressPath = path.join(process.cwd(), 'docs', 'PROGRESS.md');
const logPath = path.join(process.cwd(), 'data', 'commit-log.json');

function ensureFile(filePath, initial) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, initial);
  }
}

ensureFile(progressPath, '# Progress Log\n\n');
ensureFile(logPath, '[]\n');

const logs = JSON.parse(fs.readFileSync(logPath, 'utf8'));

(async () => {
  for (let i = 0; i < count; i++) {
    const task = tasks[random.int(0, tasks.length - 1)];
    const now = moment();
    const stamp = now.format('YYYY-MM-DD HH:mm:ss');
    const iso = now.toISOString();

    const line = `- ${stamp} — ${task}\n`;
    fs.appendFileSync(progressPath, line);

    logs.push({ timestamp: iso, task });
    fs.writeFileSync(logPath, JSON.stringify(logs, null, 2) + '\n');

    await git.add(['docs/PROGRESS.md', 'data/commit-log.json']);
    await git.commit(`chore(activity): ${task}`);
  }

  console.log(`Created ${count} real commit(s) with current timestamps.`);
  console.log('Run `git push` to publish.');
})();
