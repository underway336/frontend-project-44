#!/usr/bin/env node

import readlineSync from 'readline-sync'
import { userName } from '../src/cli.js'

for (let i = 0; i < 3; i += 1) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    const getRandomNumber = (min = 0, max = 100) => {
        const randomNumber = Math.floor(Math.random() * (max - min))
        return randomNumber
    }

    const number = getRandomNumber()

    const isEven = () => {
        const res = number % 2 === 0 ? 'yes' : 'no'
        return res
    }

    console.log(`Question: ${number}`)

    const answer = readlineSync.question(`Your answer: `)

    if (isEven() === answer) {
        console.log('Correct!')
        if (i === 2) {
            console.log(`Congratulations, ${userName}!`)
        }
    } else {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.")
        console.log(`Let's try again, ${userName}!`)
        break
    }
}
