import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css-files/quicksearch.css'

const QuickSearch = () => {
    // const navigate = useNavigate()
return(
    <section className="container">
        <div className="quicksearch">
            <h1 className="heading-title">How Are You Feeling Today?</h1>
            <ul className='quick_list'>
            <li className="anxiety"><a href="/anxiety">Anxiety</a></li>
            <li className="stress"><a href="/stress">Stress</a></li>
            <li className="activities"><a href="/activities">Activities</a></li>
            <li className="depression"><a href="/depression">Depression</a></li>
            <li className="moddswing"><a href="/moodswing">Mood Swings</a></li>
            </ul>
        </div>
    </section>
)
}

export default QuickSearch;