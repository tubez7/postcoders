import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function AreaCard({
  abbreviation,
  placeName,
  state,
  longitude,
  latitude,
}) {
  return (
    <div className="area-card">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {abbreviation}
          </Typography>
          <Typography variant="h5" component="div">
            {placeName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {state}
          </Typography>
          <Typography variant="body2">
            {"Longitude: "}
            {longitude}
            <br />
            {"Latitude: "}
            {latitude}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
