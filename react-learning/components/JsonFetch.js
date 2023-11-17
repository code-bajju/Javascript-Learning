import Students from '@/components/records.json';
const JsonFetch = () => {
    return ( <>
    
    <div>
        hey there i am json
    </div>

    {
        Students.map(record =>{
            return(
                <div className='Box' key={record.id}>
                    {
                        record.title
                    }
                </div>
            )
        })
    }
    </> );
}
 
export default JsonFetch;