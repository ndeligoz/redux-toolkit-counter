import React from 'react'
import { useSelector } from 'react-redux'


function Footer() {
    const count = useSelector((state) => state.counter.value)

    return (
        <div>

            Seçilen adet : {count}

        </div>
    )
}

export default Footer