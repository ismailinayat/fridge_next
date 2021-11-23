
import  Link  from 'next/Link'
import Image from 'next/Image'

function QR() {
    return (
        <div className='qr_scanner'>
            <Link href='/welcome'>
                <Image src="/qr.png" width={100} height= {100}alt="qr code image" />
            
            </Link>
        </div>
    )
}

export default QR
