import React, { Component } from 'react'

export class Nav extends Component {
  render() {
    return (
      <nav>
        <ul class="first">
          <i class="fa fa-github fa-2x"></i>
          <li class="brand">
            <a href="www.octodex.github.com">Octodex</a>
          </li>
          <li class="home">
            <a href="www.octodex.github.com">Home</a>
          </li>
          <li>
            <a href="www.octodex.github.com/faq/">FAQ</a>
          </li>
        </ul>
        <ul class="last">
          <li class="hover">
            <a href="www.twitter.com/githubdesign">Follow us on Twitter</a>
          </li>
          <li class="hide">
            <a href="www.github.com">Back to GitHub.com</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav
