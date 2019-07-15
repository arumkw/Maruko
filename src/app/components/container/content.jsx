import React from 'react'
import Lists from './lists.jsx';

const Content = () => {
    let json = [{
        id: 1,
        title: 'Kelas 1',
        content1: 'ini bukan apa-apa',
        content2: 'ini bukan siapa-siapa'
    }, {
        id: 2,
        title: 'Kelas 2',
        content1: 'ini bukan apa-apa',
        content2: 'ini bukan siapa-siapa'
    }, {
        id: 3,
        title: 'Kelas 3',
        content1: 'ini bukan apa-apa',
        content2: 'ini bukan siapa-siapa'
    }, {
        id: 4,
        title: 'Kelas 4',
        content1: 'ini bukan apa-apa',
        content2: 'ini bukan siapa-siapa' 
    }]

    return (
        <div>
            <h1>Next Meetup</h1>
            <div className="Content">
                <Lists
                    maping={json} 
                />
            </div>
        </div>
    )
}

export default Content;