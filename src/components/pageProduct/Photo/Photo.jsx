
import $ from "jquery";
import React from 'react';
import { findDOMNode } from 'react-dom';
import s from './Photo.module.css';

class Photo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      src: this.props.photo[0],
      n: 0,
      time: 300
    }
  }
  valid = (n = this.state.n) => {
    if (n >= this.props.photo.length) {
      this.handleSlider(this.props.photo[0], 0)
    } else {
      if (n <= -1) {
        this.handleSlider(this.props.photo[this.props.photo.length - 1], this.props.photo.length - 1)
      } else {
        this.handleSlider(this.props.photo[n], n)
      }
    }
  }
  getID = (srcImage) => {
    let counter = 0
    this.props.photo.map(item => {
      if (item === srcImage) {
        this.handleSlider(srcImage, counter)
      } else {
        counter++;
      }
      return undefined
    })
  }
  handleSlider = (srcImage = this.state.src, n = this.state.n) => {
    const el = findDOMNode(this.refs.image);
    $(el).fadeOut(this.state.time, () => {
      this.setState({ n: n, src: srcImage })
      $(el).attr('src', srcImage).fadeIn(this.state.time);
    })
  }

  render() {
    const classes = {
      last: s.Navi + " " + s.Last,
      next: s.Navi + " " + s.Next
    }
    return <div>
      <div>
        <img alt='123' ref='image' className={s.Photo} src={this.state.src} />

        <button className={classes.last} onClick={() => this.valid(this.state.n - 1)}>Last </button>
        <button className={classes.next} onClick={() => this.valid(this.state.n + 1)}>Next</button>
      </div>
      <div className={s.mini}>
        {this.props.photo.map(photo => {
          if (this.state.src === photo) {
            return <img alt='' src={photo} onClick={() => { this.getID(photo) }} />
          } else {
            return <img alt='' src={photo} onClick={() => { this.getID(photo) }} className={s.diactivated} />
          }
        })}
      </div>

    </div >;
  }
};

export default Photo;