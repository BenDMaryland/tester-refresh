import React, { useState } from 'react'

function NavBar({ initialPage, PageChangeHandler }) {




    return (
        <div>
            <button name='page1' onClick={PageChangeHandler}>Page 1</button>
            <button name='page2' onClick={PageChangeHandler}>Page 1</button>


        </div>
    )
}

export default NavBar