import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import highlight from 'highlight.js'

export default class Highlight extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    language: PropTypes.string.isRequired
  }

  componentDidMount () {
    this.codeBlock()
  }

  componentDidUpdate () {
    highlight.initHighlighting.called = false
    this.codeBlock()
  }

  codeBlock () {
    const { code } = this.refs
    highlight.highlightBlock(findDOMNode(code))
  }

  render () {
    const { children, language } = this.props

    return (
      <pre {...this.props}>
        <code
          className={language}
          ref='code'
        >
          {children}
        </code>
      </pre>
    )
  }
}
