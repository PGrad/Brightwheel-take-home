import { Box, Button, Typography } from "@mui/material";
import "./CompanyCard.css"
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import { changeStarStatus } from "../api";
import { CompanyCardType } from "../types";
import { useState } from "react";

export default function CompanyCard({
    id,
    name,
    description,
    address,
    starred,
    image,
}: CompanyCardType) {
    const [isStarred, setIsStarred] = useState(starred);

    const onStarChange = (e: any) => {
        setIsStarred(!isStarred);
        changeStarStatus(id, !isStarred)
    };

    return (
        <section
            className="card"
            onClick={onStarChange}
        >
            {image &&
                <div className="img-container">
                    <img
                        src={image}
                        alt={`A photo of ${name}.`}
                    />
                </div>
            }
            {address &&
                <Box sx={{ gridColumn: "2" }}>
                    <Typography variant="h4">{name}</Typography>
                    <address>
                        {address.address1}<br/>
                        {`${address.city}, ${address.state} ${address.postalCode}`}
                    </address>
                </Box>
            }
            <Typography sx={{ gridColumn: "2" }} variant="body1">{description}</Typography>
            <Button
                sx={{
                    display: "flex",
                    gap: ".5em",
                    gridRow: "3",
                    gridColumn: "2 / 3",
                    width: "fit-content",
                    justifySelf: "end",
                }}
                color="success"
                variant="contained"
                aria-label="star"
            >
                {isStarred ? <StarIcon/> : <StarOutlineIcon/>}
                {isStarred ? "Remove from Favorites" : "Add to Favorites" }
            </Button>
        </section>
    );
}