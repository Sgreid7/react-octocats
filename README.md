# React Octocats

This is a responsive website cloned after (https://octodex.github.com/) using React

# Objectives

- Build on your knowledge of HTML, CSS, & Javascript
- Introduce React Components
- Learn to identify parts of a web site as Components
- Understand and use "props" in React

# Includes

- [REACT](https://reactjs.org/docs/hooks-intro.html)
- [FLEXBOX](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [GRID](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

# Featured Code

## Mapping over cats

```JSX
return (
      <main>
        {octocats.map(cat => {
          return <Card name={cat.name} imgUrl={cat.url} number={cat.number} />
        })}
      </main>
    )
```

# Live Site

- [LIVE SITE](https://react-octocats-sam.netlify.app/)
