import React from 'react'
import App, { Container } from 'next/app'
import styles from './_style';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <style jsx global>{styles}</style>
        <Component {...pageProps} />
      </Container>
    )
  }
}