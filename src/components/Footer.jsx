import React from 'react'
import '../components/footer.css'

function Footer() {
  const showDate = new Date();
    const newDate = showDate.toDateString();
    const todayDate = showDate.getDate() + '-' + (showDate.getMonth() + 1) + '-' + showDate.getFullYear()
    const Time = showDate.getHours() + ':' + showDate.getMinutes() + ':' + showDate.getSeconds();

    return (
        <>
            <footer className="footer">
                <div>
                  <p>Copyright &copy; NT News</p>
                  <p>{newDate}- {Time}</p>
                </div>
            </footer>
        </>
    )
}

export default Footer