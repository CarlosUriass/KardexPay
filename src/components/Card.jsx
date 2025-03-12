import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

function ServiceCard({ image, title, description }) {
  return (
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray" className="relative">
        <div className="h-60 w-full overflow-hidden">
          <img
            src={image}
            alt="ui/ux review check"
            className="w-full h-full object-cover"
          />
        </div>
        <IconButton
          size="sm"
          color="red"
          variant="text"
          className="!absolute top-4 right-4 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </IconButton>
      </CardHeader>
      <CardBody>
        <div className="mb-3">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {title}
          </Typography>
        </div>
        <Typography color="gray">{description}</Typography>
      </CardBody>
      <CardFooter className="pt-3">
        <Button
          size="lg"
          fullWidth={true}
          className="bg-blue-400 hover:bg-blue-500 py-2"
        >
          Tramitar
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ServiceCard;
