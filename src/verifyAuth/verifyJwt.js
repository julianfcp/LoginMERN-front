import axios from 'axios';

const getSession = async () => {
    try {
        const res = await axios({
            method: 'post',
            url: 'http://localhost:4000/api/notes',
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Cache': 'no-cache'
            }
            
        });
        if(res.data.success) {
            console.log("true");
            return true;
        }
    } catch (error) {
        console.log(error);
    }
        console.log("false")
        return false;
}

export default getSession;