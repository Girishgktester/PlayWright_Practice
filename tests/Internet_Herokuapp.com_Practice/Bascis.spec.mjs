import DigestFetch from 'digest-fetch';
import { test, expect } from '@playwright/test';
import exp from 'constants';
import fs from 'fs'; // ✅ Node.js file system module


test('Testcase 6: Digest Auth using digest-fetch', async () => {
    const client = new DigestFetch('admin', 'admin');
  
    const response = await client.fetch('https://the-internet.herokuapp.com/digest_auth');
  
    // Assert status code
    expect(response.status).toBe(200); // Will fail if not authenticated

    const data = await response.text();
    console.log(data);
  
    // Optional: Assert page contains expected text
    expect(data).toContain("Congratulations! You must have the proper credentials.");
  });
