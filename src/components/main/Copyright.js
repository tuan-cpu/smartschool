import React from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

function Copyright() {
  return (
    <Typography variant="body2" color="black" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Phần mềm hỗ trợ quản lý dạy học trực tuyến
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Copyright
