

<h1>UI Automation Assignment – demoqa.com</h1>

<p>
This project contains an <strong>end-to-end UI automation assignment</strong> implemented using
<strong>Playwright with JavaScript</strong> for the website
<a href="https://demoqa.com/" target="_blank">https://demoqa.com/</a>.
</p>

<hr>

<h2>Assignment Overview</h2>

<ul>
  <li>Navigate to demoqa.com</li>
  <li>Manually create a new user</li>
  <li>Login to Books Store Application</li>
  <li>Validate username and logout button</li>
  <li>Search for <strong>Learning JavaScript Design Patterns</strong></li>
  <li>Validate book presence</li>
  <li>Extract Title, Author, Publisher to a file</li>
  <li>Logout</li>
</ul>

<hr>

<h2>Tech Stack</h2>
<ul>
  <li>Playwright</li>
  <li>JavaScript</li>
  <li>Cross-browser testing</li>
</ul>

<hr>

<h2>Project Structure</h2>
<pre>
UI-assignment---demoqa.com/
│
├── tests/
│   └── demoqa.spec.js
├── playwright.config.js
├── package.json
└── README.md
</pre>

<hr>

<h2>Installation</h2>

<pre>
git clone https://github.com/nachiketagrawal2310/UI-assignment---demoqa.com.git
cd UI-assignment---demoqa.com
npm install
npx playwright install
</pre>

<hr>

<h2>Running Tests</h2>
<h3>Run all tests (headless)</h3>
<pre><code>npx playwright test
</code></pre>

<h3>Run all tests (headed mode)</h3>
<pre><code>npx playwright test --headed
</code></pre>

<h3>Run tests in UI mode</h3>
<pre><code>npx playwright test --ui
</code></pre>

<h3>Run a specific test file</h3>
<pre><code>npx playwright test tests/example.spec.js
</code></pre>

<hr>

<h2>Reports</h2>
<p>HTML reports are generated automatically.</p>

<pre>npx playwright show-report</pre>
<p>This command launches the test report in your default browser.</p> 
<hr>

<h2>Notes</h2>
<ul>
  <li>User registration is manual</li>
  <li>Credentials must be updated before execution</li>
  <li>Validates UI and extracted data</li>
</ul>

<hr>

<h2>Author</h2>
<p>
<strong>Nachiket Agrawal</strong><br>
GitHub: <a href="https://github.com/nachiketagrawal2310" target="_blank">
https://github.com/nachiketagrawal2310
</a>
</p>

<footer>
  <p>Playwright UI Automation Assignment</p>
</footer>

</div>

</body>
</html>
