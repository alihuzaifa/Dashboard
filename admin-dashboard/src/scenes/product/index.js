import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  CardActions,
  CardContent,
  Collapse,
  Rating,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { useGetProductsQuery } from "state/api";
import Header from "components/Header";
import { ThreeDots } from "react-loader-spinner";
import FlexBetween from "components/FlexBetween";

const Product = ({
  id,
  price,
  description,
  rating,
  supply,
  stat,
  category,
  name,
}) => {
  const theme = useTheme();
  const [isExpand, setIsExpand] = useState(false);
  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: "14px" }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {category || ""}
        </Typography>
        <Typography variant="h5" component={"div"}>
          {name || ""}
        </Typography>
        <Typography
          sx={{
            mb: "1.5rem",
          }}
          color={theme.palette.secondary[400]}
        >
          {Number(price.toFixed(2)) || 0}
        </Typography>
        <Rating value={rating} readOnly />
        <Typography variant="body2">{description || ""}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpand(!isExpand)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpand}
        timeout={"auto"}
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
        }}
      >
        <CardContent>
          <Typography>id: {id || ""}</Typography>
          <Typography>Supply Left: {supply || ""}</Typography>
          <Typography>
            Yearly Sales This Year: {stat?.yearlySalesTotal || ""}
          </Typography>
          <Typography>
            Yearly Units Sales This Year: {stat?.yearlyTotalSoldUnits || ""}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();
  const isNonMobile = useMediaQuery("min-width:700px");
  const theme = useTheme();

  return (
    <Box m={"1.5rem 2.5rem"}>
      <Header title="PRODUCTS" subtitle="See your list of Products" />
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {data?.map(
            ({
              _id,
              name,
              description,
              price,
              rating,
              category,
              stat,
              supply,
            }) => {
              return (
                <Product
                  key={_id}
                  id={_id}
                  name={name}
                  description={description}
                  price={price}
                  rating={rating}
                  category={category}
                  stat={stat}
                  supply={supply}
                />
              );
            }
          )}
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color={theme.palette.secondary[300]}
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </Box>
      )}
    </Box>
  );
};

export default Products;
