// Invoked on the commit-msg git hook by yorkie.

const chalk = require("chalk");
// const msgPath = process.env.HUSKY_GIT_PARAMS;
const msgPath = process.argv[2];
const msg = require("fs").readFileSync(msgPath, "utf-8").trim();

const commitRE =
  /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}|^(Version)/;

if (!commitRE.test(msg)) {
  console.log();
  console.error(
    `  ${chalk.bgRed.white(" ERROR ")} ${chalk.red(
      `invalid commit message format.`
    )}\n\n` +
      chalk.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
      ) +
      `    ${chalk.green(`feat(compiler): add 'comments' option`)}\n` +
      `    ${chalk.green(`fix: handle events on blur (close #28)`)}\n\n` +
      chalk.red(
        `  Current support feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release \n`
      )
  );
  process.exit(1);
}
