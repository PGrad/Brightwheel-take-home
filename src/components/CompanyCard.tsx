import { Box, Button, Typography } from "@mui/material";
import "./CompanyCard.css"
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import { CompanyCardType, StarChangeHandlerType } from "../types";
import { useState } from "react";

export default function CompanyCard({
    company,
    onStarChange,
}: {
    company: CompanyCardType,
    onStarChange: StarChangeHandlerType,
}) {
    const { id, name, description, address, starred, image } = company;
    const [isStarred, setIsStarred] = useState(starred);

    const starChange = (_: any) => {
        setIsStarred(prevStarred => {
            onStarChange(id, prevStarred);

            return !prevStarred;
        });
    };

    return (
        <section
            className="card"
            onClick={starChange}
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
                <Box
                    className="address"
                    sx={{ paddingBottom: ".5em", borderBottom: "1px solid black" }}
                >
                    <Typography variant="h4">{name}</Typography>
                    <address>
                        {address.address1}<br/>
                        {`${address.city}, ${address.state} ${address.postalCode}`}
                    </address>
                </Box>
            }
            <Typography
                variant="body1"
            >
                {description}
            </Typography>
            <Button
                sx={{
                    display: "flex",
                    gap: ".5em",
                    gridRow: "3",
                    width: "fit-content",
                }}
                className="star-button"
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