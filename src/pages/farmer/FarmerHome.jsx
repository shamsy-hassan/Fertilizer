import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
} from "@material-tailwind/react";
import { CheckCircleIcon, ClipboardDocumentCheckIcon, BookOpenIcon } from "@heroicons/react/24/solid";

export default function FarmerHome() {
  return (
    <div className="p-4 space-y-6">
      <Typography variant="h4" color="blue-gray">
        Welcome to Your Dashboard
      </Typography>

      {/* Quick Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <ClipboardDocumentCheckIcon className="h-8 w-8 text-blue-500" />
            <div>
              <Typography variant="h6">Active Orders</Typography>
              <Typography variant="h5" color="blue-gray">2</Typography>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-4">
            <BookOpenIcon className="h-8 w-8 text-green-500" />
            <div>
              <Typography variant="h6">Available Skills</Typography>
              <Typography variant="h5" color="blue-gray">15</Typography>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-4">
            <CheckCircleIcon className="h-8 w-8 text-emerald-500" />
            <div>
              <Typography variant="h6">Loan Status</Typography>
              <Chip value="Approved" color="green" className="w-fit mt-1" />
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Activities Section */}
      <Card>
        <CardHeader floated={false} shadow={false} className="bg-gray-100 p-4">
          <Typography variant="h6" color="blue-gray">
            Recent Activities
          </Typography>
        </CardHeader>
        <CardBody>
          <ul className="list-disc pl-5 space-y-2 text-blue-gray-700">
            <li>Order #1234 shipped</li>
            <li>New skill added: Pest Management</li>
            <li>Loan application approved</li>
          </ul>
        </CardBody>
      </Card>
    </div>
  );
}
