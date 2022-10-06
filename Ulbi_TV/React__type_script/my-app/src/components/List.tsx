import React from 'react'

// дженейрик "T" означает что массив элементов может быть любого типа 
interface ListProps<T> {
    items: T[]
    renderItem: (item: T) => React.ReactNode
}




export default function List<T>(props: ListProps<T>) {

    return (
        <div>
            {props.items.map(props.renderItem)}
        </div>
    )
}













