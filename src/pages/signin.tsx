import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function SignIn(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    console.log('Sign in attempt:', { email });
  };

  return (
    <Layout
      title="Sign In"
      description="Sign in to access educational content on combating terrorism in Pakistan">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <div className="card">
              <div className="card__header">
                <h1>Sign In</h1>
                <p>Access your account to continue learning</p>
              </div>
              <div className="card__body">
                <form onSubmit={handleSubmit}>
                  <div className="margin-bottom--md">
                    <label htmlFor="email" className="margin-bottom--sm" style={{display: 'block'}}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="input"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        border: '1px solid var(--ifm-color-emphasis-300)',
                        borderRadius: '0.25rem',
                        fontSize: '1rem',
                      }}
                    />
                  </div>
                  <div className="margin-bottom--md">
                    <label htmlFor="password" className="margin-bottom--sm" style={{display: 'block'}}>
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="input"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        border: '1px solid var(--ifm-color-emphasis-300)',
                        borderRadius: '0.25rem',
                        fontSize: '1rem',
                      }}
                    />
                  </div>
                  <div className="margin-bottom--md">
                    <Link to="/forgot-password" className="text--sm">
                      Forgot your password?
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="button button--primary button--block"
                    style={{width: '100%'}}>
                    Sign In
                  </button>
                </form>
              </div>
              <div className="card__footer">
                <p className="text--center margin-bottom--none">
                  Don't have an account?{' '}
                  <Link to="/signup">Sign Up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
