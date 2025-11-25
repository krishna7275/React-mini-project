import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}) {
    const IMG = "https://images.unsplash.com/photo-1669453343304-ced8306f87fe?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Hot_img ="https://images.unsplash.com/photo-1525490829609-d166ddb58678?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Rain_img = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Cold_img = "https://images.unsplash.com/photo-1519944159858-806d435dc86b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return ( 
            <div className="card">
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? Rain_img : info.temp > 15? Hot_img : Cold_img} 
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15? <SunnyIcon />:<AcUnitIcon />} 
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min temperature = {info.tempMin}&deg;C</p>
                        <p>Max temperature = {info.tempMax}&deg;C</p>
                        <p>The weather can be described as <b>{info.weather}</b> feels like <b>{info.feelslike}</b> </p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        
    )
}