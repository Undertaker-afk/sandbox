import React from 'react';

const SetupPage = () => {
  return (
    <div className="setup-page">
      <h1>Setup Project</h1>
      <p>To download and set up your project, copy the following command:</p>
      <pre>
        <code>wget sandbox.gitwit.dev/download/{'{project-id}'} -O setup.sh | bash ./setup.sh</code>
      </pre>
      <h2>Instructions</h2>
      <p>When you execute the above command, it will download a <code>setup.sh</code> file that gets executed. This file will download the whole project via a one-time API key that is saved in the dynamically generated <code>setup.sh</code>.</p>
      <h3>Next.js Project</h3>
      <p>If the project is based on Next.js, the <code>setup.sh</code> will create the following files:</p>
      <ul>
        <li><code>start.sh</code>: Contains <code>npm install</code>, <code>npm run build</code>, and <code>npm start</code> commands.</li>
        <li><code>dev.sh</code>: Contains <code>npm install</code> and <code>npm run dev</code> commands.</li>
        <li><code>cloudflare.sh</code>: Contains commands to install the Cloudflared CLI and run the project with Cloudflare Tunnel.</li>
      </ul>
      <h3>Cloudflare Setup</h3>
      <p>The <code>cloudflare.sh</code> script will:</p>
      <ul>
        <li>Detect the Linux distribution and use the correct commands to install Cloudflared.</li>
        <li>Run <code>npm install</code>, <code>npm run build</code>, and <code>npm start</code>.</li>
        <li>Run <code>cloudflared tunnel --url http://localhost:{'{port}'}</code>.</li>
      </ul>
      <p>For more information on installing Cloudflared, visit <a href="https://pkg.cloudflare.com/index.html" target="_blank" rel="noopener noreferrer">Cloudflare's official documentation</a>.</p>
    </div>
  );
};

export default SetupPage;
