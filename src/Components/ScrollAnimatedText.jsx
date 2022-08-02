import React from 'react'
import ScrollElement from './ScrollElement';

export default function ScrollAnimatedText({ children, element, wordvariants, lettervariants, transition, issentence, ...props }) {
  return (
    <ScrollElement
      element={element}
      variants={wordvariants}
      transition={transition}
      {...props}
    >
      {
        children.split(issentence ? ' ' : '').map((char, index) => (
          <ScrollElement
            element='div'
            key={char + "-" + index} 
            variants={lettervariants}
            transition={transition}
            custom={index}
            className="inline-block"
          >
            {char}{issentence && <>&nbsp;</>}
          </ScrollElement>
        )
        )
      }
    </ScrollElement>
  )
}
