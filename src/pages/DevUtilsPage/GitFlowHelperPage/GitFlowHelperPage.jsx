import styles from "./GitFlowHelperPage.module.css"

function GitFlowHelperPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>gf — Simple Gitflow Helper</h1>
      <p className={styles.subtitle}>
        A lightweight PowerShell script inspired by{" "}
        <a href="https://github.com/Twenga/twgit" target="_blank" rel="noopener noreferrer">
          twgit
        </a>
        , providing a streamlined Git branching workflow for feature, release, and hotfix
        management.
      </p>

      <p className={styles.repoLink}>
        <a
          href="https://github.com/ziwei531/simple-gitflow-helper-powershell"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </p>

      {/* Installation */}
      <section className={styles.section}>
        <h2>Installation (Windows)</h2>

        <div className={styles.card}>
          <h3>Automated Install (Recommended)</h3>
          <p>Run the installer in PowerShell:</p>
          <pre className={styles.code}>.\install.ps1</pre>
          <p>
            The script detects existing installations, checks prerequisites, configures your
            PowerShell profile, and sets the execution policy — all interactively.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Manual Install</h3>
          <h4>Prerequisites</h4>
          <ul>
            <li>
              <strong>Git</strong> — installed and available on your{" "}
              <code>PATH</code> ({" "}
              <a href="https://git-scm.com/download/win" target="_blank" rel="noopener noreferrer">
                download
              </a>
              )
            </li>
            <li>
              <strong>PowerShell 5.1+</strong> — included with Windows 10/11
            </li>
          </ul>

          <h4>Step 1 — Clone or Download</h4>
          <pre className={styles.code}>
git clone https://github.com/ziwei531/simple-gitflow-helper-powershell.git C:\path\to\simple-gitflow-helper-powershell</pre>

          <h4>Step 2 — Add to Your PowerShell Profile</h4>
          <p>Edit your PowerShell profile to make <code>gf</code> available in every session:</p>
          <pre className={styles.code}>
{`if (!(Test-Path $PROFILE)) { New-Item -Path $PROFILE -ItemType File -Force }
notepad $PROFILE`}</pre>
          <p>Add the following line (adjust the path):</p>
          <pre className={styles.code}>
{`function gf { & "C:\\path\\to\\simple-gitflow-helper-powershell\\gf.ps1" @args }`}</pre>
          <p>Save and reload:</p>
          <pre className={styles.code}>. $PROFILE</pre>

          <h4>Step 3 — Allow Script Execution</h4>
          <pre className={styles.code}>
{`# Run PowerShell as Administrator, then:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`}</pre>

          <h4>Step 4 — Verify</h4>
          <pre className={styles.code}>gf feature start my-feature</pre>
          <p>
            If a new branch <code>feature-my-feature</code> is created from{" "}
            <code>stable</code>, the installation is complete.
          </p>
        </div>
      </section>

      {/* Commands */}
      <section className={styles.section}>
        <h2>Commands</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Command</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>gf feature start {'{name}'}</code></td>
                <td>Create <code>feature-{'{name}'}</code> from stable and push to origin</td>
              </tr>
              <tr>
                <td><code>gf feature remove {'{name}'}</code></td>
                <td>Delete local and remote <code>feature-{'{name}'}</code> branch</td>
              </tr>
              <tr>
                <td><code>gf feature merge-into-release [version]</code></td>
                <td>Merge current feature into a release branch and push</td>
              </tr>
              <tr>
                <td><code>gf release start</code></td>
                <td>Create <code>release-X.Y.Z</code> from last tag (minor bump)</td>
              </tr>
              <tr>
                <td><code>gf release start --major</code></td>
                <td>Create <code>release-X.Y.Z</code> from last tag (major bump)</td>
              </tr>
              <tr>
                <td><code>gf release finish</code></td>
                <td>Merge release → stable, tag <code>vX.Y.Z</code>, delete release branch</td>
              </tr>
              <tr>
                <td><code>gf hotfix start</code></td>
                <td>Create <code>hotfix-X.Y.Z</code> from last tag (revision bump)</td>
              </tr>
              <tr>
                <td><code>gf hotfix finish</code></td>
                <td>Merge hotfix → stable, tag <code>vX.Y.Z</code>, delete hotfix branch</td>
              </tr>
              <tr>
                <td><code>gf clean</code></td>
                <td>Delete local branches whose remote tracking branch is gone</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Branch Model */}
      <section className={styles.section}>
        <h2>Branch Model</h2>
        <pre className={styles.codeBlock}>
{`stable          ← integration branch (single source of truth)
feature-*       ← feature branches, branched from stable
release-X.Y.Z   ← release preparation, branched from last tag
hotfix-X.Y.Z    ← production hotfixes, branched from last tag`}
        </pre>
        <p>
          Feature branches start from <code>stable</code>. Release and hotfix branches start from
          the most recent <code>vX.Y.Z</code> tag.
        </p>
      </section>

      {/* Versioning */}
      <section className={styles.section}>
        <h2>Versioning</h2>
        <p>
          Tags follow <code>vX.Y.Z</code> (semver). Release and hotfix commands scan existing tags
          to auto-detect version numbers:
        </p>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Command</th>
                <th>Bump</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>release start</code></td>
                <td>minor (default)</td>
                <td><code>v0.1.0</code> → <code>release-0.2.0</code></td>
              </tr>
              <tr>
                <td><code>release start --major</code></td>
                <td>major</td>
                <td><code>v0.1.0</code> → <code>release-1.0.0</code></td>
              </tr>
              <tr>
                <td><code>hotfix start</code></td>
                <td>revision</td>
                <td><code>v0.1.0</code> → <code>hotfix-0.1.1</code></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>When no tags exist, the first release/hotfix starts at <code>0.1.0</code>.</p>
      </section>

      {/* Workflow Examples */}
      <section className={styles.section}>
        <h2>Workflow Examples</h2>

        <div className={styles.card}>
          <h3>Feature</h3>
          <pre className={styles.code}>
{`gf feature start login-page    # creates feature-login-page from stable
# ... make changes, commit ...
gf feature merge-into-release  # merges into latest active release branch

# Or, to discard a feature entirely:
gf feature remove login-page   # deletes local and remote feature-login-page`}
          </pre>
        </div>

        <div className={styles.card}>
          <h3>Release</h3>
          <pre className={styles.code}>
{`gf release start               # creates release-0.2.0 (minor bump from v0.1.0)
gf release start --major        # creates release-1.0.0 (major bump from v0.1.0)
# ... stabilize, test, merge features ...
gf release finish               # merge → stable, tag, delete branch`}
          </pre>
        </div>

        <div className={styles.card}>
          <h3>Hotfix</h3>
          <pre className={styles.code}>
{`gf hotfix start                # creates hotfix-0.1.1 from last tag (rev bump from v0.1.0)
# ... fix bugs, commit ...
gf hotfix finish               # auto: merge → stable, tag v0.1.1, delete branch`}
          </pre>
        </div>

        <div className={styles.card}>
          <h3>Clean</h3>
          <pre className={styles.code}>
{`gf clean                       # prune remote refs, then list & delete stale local branches`}
          </pre>
        </div>
      </section>

      {/* Quick Start */}
      <section className={styles.section}>
        <h2>Quick Start</h2>
        <pre className={styles.code}>
{`# After installation, use from any directory:
gf feature start my-feature
gf release start
gf hotfix start`}
        </pre>
      </section>

      {/* Requirements */}
      <section className={styles.section}>
        <h2>Requirements</h2>
        <ul className={styles.list}>
          <li>Git installed and on <code>PATH</code></li>
          <li>PowerShell 5.1+</li>
          <li>A <code>stable</code> branch must exist in the repository</li>
        </ul>
      </section>

      {/* Known Issues */}
      <section className={styles.section}>
        <h2>Known Issues</h2>
        <ul className={styles.list}>
          <li>
            PowerShell <code>$ErrorActionPreference</code> conflicts with git&apos;s stderr output
            — the script uses <code>&quot;Continue&quot;</code> internally, but the calling
            session may interfere.
          </li>
          <li>Execution policy may need to be relaxed per session.</li>
        </ul>
      </section>
    </main>
  )
}

export default GitFlowHelperPage
