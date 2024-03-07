import React from 'react'

function Game() {


    function consolePrinter() {

        for (let i = 0; i < 10; i++) {
           let output = "*".repeat(i)


            console.log(output)

        }
    }

    consolePrinter()



    return (
        <div></div>
    )
}

export default Game