import React from 'react'

const ListItem = ({note}) => {
    console.log('>>>', note.body)
    return (
        <div className="notes-list-item">
            <h3>
                {note.body}
            </h3>

            
        </div>
    )
}

export default ListItem
