import React from 'react'
import { Link } from 'react-router-dom'
import { IRepo } from '../models/models'



function RepoCard({ repo }: { repo: IRepo }) {
    return (
        <div className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-red-100 transition-all'>
            <a href={repo.html_url} target='_blank'>  // _blank открывает в новой вкладке
                <h2 className='text-lg font-bold'>{repo.full_name}</h2>
                <p className='text-sm'>
                    Forks: <span className='font-bold mr-2'>{repo.forks}</span>
                    Watchers: <span className='font-bold'>{repo.watchers}</span>
                </p>
                <p className='text-sm font-thin'>{repo.description}</p>
            </a>
        </div>
    )
}


export default RepoCard