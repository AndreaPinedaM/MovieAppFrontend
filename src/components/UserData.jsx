import { FaUserAltSlash } from 'react-icons/fa'
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';

//traer la informacion desde redux


const UserData = () => {
    const user = JSON.parse(sessionStorage.getItem('user'))

    const confirmation = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, your movies will be deleted too!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your account has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }

    return (
        <div className='userData'>
            <h3>My Data Account</h3>
            <h5>Email: {user.email}</h5>
            <h5>User name: {user.name}</h5>

            <div id="dangerZone">
                <p className="text-danger">Danger Zone</p>
                <Button
                    id='delete'
                    variant="danger"
                    onClick={confirmation}>
                    Delete Account <FaUserAltSlash></FaUserAltSlash>
                </Button>{' '}
            </div>
        </div>
    )
}

export default UserData
