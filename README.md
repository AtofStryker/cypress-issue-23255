
#### steps to reproduce

```
yarn
yarn cypress open
```

- run the works.cy.js to see a successful before hook.
- run the doesntwork.cy.js to see a failed before hook. This is [expected behavior](https://docs.cypress.io/guides/guides/test-retries#How-It-Works)
![](https://user-images.githubusercontent.com/3980464/184448873-ebfd2ffe-289f-4849-a632-26c5981e4529.png)

- run the workaround.cy.js via the `npm run workaround` command to see a  workaround. Though, we don't encourage this as it violates [best practices](https://docs.cypress.io/guides/references/best-practices#Having-tests-rely-on-the-state-of-previous-tests) 
