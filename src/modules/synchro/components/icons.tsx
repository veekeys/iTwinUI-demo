import React from "react";

export const ChangeOrderIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fillRule="nonzero" fill="none">
      <circle cx={12.5} cy={12.5} r={12.5} fill="#85A9CF" />
      <path
        fill="#FFF"
        d="M18.2 4.55h-1.15V5.7h1.15v13.8H6.7V5.7h1.15V4.55H6.7c-.633 0-1.15.518-1.15 1.15v13.8c0 .632.517 1.15 1.15 1.15h11.5c.632 0 1.15-.517 1.15-1.15V5.7c0-.633-.518-1.15-1.15-1.15zM13.6 3.4c0-.632-.517-1.15-1.15-1.15s-1.15.518-1.15 1.15H9.862A.869.869 0 0 0 9 4.262V5.7h6.9V4.262a.869.869 0 0 0-.863-.862H13.6zm-2.565 12.477-3.323-3.323.989-.989 2.334 2.334L16.2 8.736l.989.989-6.152 6.152z"
      />
    </g>
  </svg>
)

export const IssueIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <circle r={12} cy={12} cx={12} fill="#f66965" />
    <path
      d="M17.5 7c0 .5-.867 2.525-3 3.5 0 1 1.5 1.336 4.5 1.008-2.667 1.137-4.444 1.624-5.333 1.462-.89-.163-1.334-.488-1.334-.975-.808-.3-1.616-.059-2.424.723l1.758 5.712s-.292.776-1.167.517L7 7.57s.292-.776 1.167-.517l.306.995-.14.048c2.845-.974 4.534-1.299 5.067-.974.4.252.578.496.533.73 1.311-.08 2.5-.365 3.567-.852z"
      fill="#fff"
    />
  </svg>
)