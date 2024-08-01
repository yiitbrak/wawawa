import "./module.css";
import os from 'os'
import {cookies} from 'next/headers'

export default async function Body() {
  'use server'
  cookies()
  return (
    <div>
      <h3>Container id: {os.hostname()}</h3>
      <img class="invert" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/394px-Nextjs-logo.svg.png?20230404233503" />
      <h3 class="fake_button"><a href="http://www.aaaabbbbcccc.click">Index</a></h3>
    </div>
  );
}