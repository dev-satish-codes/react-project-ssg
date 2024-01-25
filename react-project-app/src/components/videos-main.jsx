import { Button} from '@mui/material';
export function VideoMain(){
    return(
        <div>
            <main className="d-flex justify-content-center mt-4">
                <div>
                    <h1>watch videos any where</h1>
                    <p className="text-center mt-4 mb-4">please register for more technology videos</p>
                    <div className="input-group">
                        <input type="email" className="form-control" placeholder="your mail address" />
                      <Button variant='contained' color='error'>Get Started</Button>
                    </div>
                </div>

            </main>
        </div>
    )
}