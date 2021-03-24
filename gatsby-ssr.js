import React from "react";

export function onRenderBody({ setPostBodyComponents }) {
  setPostBodyComponents([
    <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "c4bfa0dcaced44f7a46bb954ea156cc4"}' />
  ]);
}
