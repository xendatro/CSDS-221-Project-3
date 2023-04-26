import {useState} from 'react'
import { useInboxContext } from '../hooks/useInboxContext'
import { useAuthContext } from '../hooks/useAuthContext'

function New() {
    const {dispatch} = useInboxContext()
    const {user} = useAuthContext()

    const [to, setTo] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
 
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        if (!user) {
            setError("You must be logged in!")
            setIsLoading(false)
            return
        }

        const cmail = {to, subject, body}

        const response = await fetch("/api/send", {
            method: "POST",
            body: JSON.stringify(cmail),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setIsLoading(false)
          }
        if (response.ok) {
            setTo('')
            setSubject('')
            setBody('')
            setError(null)
            setIsLoading(false)
            dispatch({type: 'CREATE', payload: json})
        }
    }

    return (
        <div className='card'>
            <div className='card-header'>
                New CMail
            </div>
            <div className='card-body'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='to' className='form-label'>To:</label>
                    <input id='to' className='form-control' type='text' onChange={(e) => setTo(e.target.value)} value={to} />
                    <label htmlFor='subject' className='form-label'>Subject:</label>
                    <input id='subject' className='form-control' type='text' onChange={(e) => setSubject(e.target.value)} value={subject} />
                    <label htmlFor='body' className='form-label'>Body:</label>
                    <textarea id='body' className='form-control' type='text' onChange={(e) => setBody(e.target.value)} value={body}></textarea>
                    <br />
                    <button className='btn btn-primary' disabled={isLoading}>Send!</button>
                    <br />
                    {error && <div className="error">{error}</div>}
                </form>
            </div>
        </div>

    )
}

export default New