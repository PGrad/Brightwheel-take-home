import { Box, IconButton, Typography } from "@mui/material";
import "./CompanyCard.css"
import StarOutlineIcon from '@mui/icons-material/StarOutline';
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
        <section className="card">
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
            <IconButton
                sx={{ gridRow: "3", gridColumn: "3", width: "fit-content" }}
                aria-label="star"
                color={isStarred ? "primary" : "default"}
                onClick={onStarChange}
            >
                <StarOutlineIcon /> Favorite
            </IconButton>
        </section>
    );
}