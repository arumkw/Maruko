import React from 'react';
import Lists from './lists.jsx';
import SpanCustom from '../span.jsx';

const Content = ({props_list,result,props_page_main}) => {
    let json = [{
        id: 1,
        tanggal: '27 November 2017',
        event: '#39 JakartaJS April Meetup with kumparan',
        participant: '139 went'
    }, {
        id: 2,
        tanggal: '27 October 2017',
        event: '#38 JakartaJS April Meetup with BliBli',
        participant: '113 went'
    }, {
        id: 3,
        tanggal: '27 September 2017',
        event: '#37 JakartaJS April Meetup with Hactiv8',
        participant: '110 went'
    }]
    let resultZ = result;
    let json_filter = resultZ.filter(e => e.name.toLowerCase().includes(props_list));
    return (
        <div>
            <h1>Participant</h1>
            <div className="Content">
                <Lists
                    maping={json_filter} 
                />
            </div>
            <div className="pagination">
                {/*<span onClick={() => this.props.props_page}>&laquo;</span>*/}
                <SpanCustom 
                    props_page={(e) =>  props_page_main(1)}
                    value={'1'}
                ></SpanCustom>
                <SpanCustom
                    props_page={(e) =>  props_page_main(2)}
                    value={'2'}
                ></SpanCustom>
                <SpanCustom
                    props_page={(e) =>  props_page_main(3)}
                    value={'3'}
                ></SpanCustom>
            </div>
        </div>

    )
}

export default Content;