import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
      <section class="card">
        <img src={this.props.imgUrl} alt="" />
        <div class="logo">
          <p>
            {this.props.number} <span>{this.props.name}</span>
          </p>
        </div>
        <div>
          <i class="fa fa-github fa-2x"></i>
        </div>
      </section>
    )
  }
}

export default Card
