import { notFound } from 'next/navigation';
import { db } from '@/app/lib/stripe';
import { isValidServiceNumber, formatServiceNumber } from '@/app/lib/service-number';
import AnimationWrapper from '@/app/AnimationWrapper';
import { CheckCircle, Clock, Package, Wrench, AlertCircle } from 'lucide-react';

interface PageProps {
  params: Promise<{
    serviceNumber: string;
  }>;
}

const statusConfig = {
  PENDING: {
    icon: Clock,
    color: 'text-solarized-yellow',
    bgColor: 'bg-solarized-yellow/10',
    title: 'Request Submitted',
    description: 'Your repair request has been received and is being reviewed.'
  },
  PAID: {
    icon: CheckCircle,
    color: 'text-solarized-green',
    bgColor: 'bg-solarized-green/10',
    title: 'Payment Received',
    description: 'Payment confirmed. Preparing your shipping label.'
  },
  SHIPPED: {
    icon: Package,
    color: 'text-solarized-blue',
    bgColor: 'bg-solarized-blue/10',
    title: 'Device Shipped',
    description: 'Your device has been shipped to our repair facility.'
  },
  RECEIVED: {
    icon: CheckCircle,
    color: 'text-solarized-cyan',
    bgColor: 'bg-solarized-cyan/10',
    title: 'Device Received',
    description: 'Your device has arrived at our repair facility.'
  },
  REPAIRING: {
    icon: Wrench,
    color: 'text-solarized-orange',
    bgColor: 'bg-solarized-orange/10',
    title: 'Being Repaired',
    description: 'Our technicians are working on your device.'
  },
  COMPLETED: {
    icon: CheckCircle,
    color: 'text-solarized-green',
    bgColor: 'bg-solarized-green/10',
    title: 'Repair Completed',
    description: 'Your device is ready for pickup or shipping back.'
  },
  CANCELLED: {
    icon: AlertCircle,
    color: 'text-solarized-red',
    bgColor: 'bg-solarized-red/10',
    title: 'Request Cancelled',
    description: 'This repair request has been cancelled.'
  }
};

// Removed generateStaticParams to allow dynamic service numbers
// Service numbers are randomly generated, so we can't predict them

async function getServiceRequest(serviceNumber: string) {
  try {
    const request = await db.findServiceRequest(serviceNumber);
    return request;
  } catch (error) {
    console.error('Database error:', error);
    return null;
  }
}

export default async function TrackPage({ params }: PageProps) {
  const { serviceNumber } = await params;

  // Validate service number format
  if (!isValidServiceNumber(serviceNumber)) {
    notFound();
  }

  const request = await getServiceRequest(serviceNumber);

  if (!request) {
    notFound();
  }

  const statusInfo = statusConfig[request.status as keyof typeof statusConfig];
  const StatusIcon = statusInfo.icon;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-solarized-light dark:bg-solarized-dark">
      <div className="max-w-4xl mx-auto">
        <AnimationWrapper>
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-solarized-dark3 dark:text-solarized-light">
              Track Your Repair
            </h1>
            <p className="text-lg text-solarized-dark3 dark:text-solarized-light3">
              Service Request: <span className="font-mono font-bold text-solarized-blue">{formatServiceNumber(request.serviceNumber)}</span>
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Status Card */}
          <AnimationWrapper delay={0.1}>
            <div className="bg-white dark:bg-solarized-dark2 rounded-xl p-8 shadow-md border border-solarized-light3 dark:border-solarized-dark3">
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-full ${statusInfo.bgColor} flex items-center justify-center mr-4`}>
                  <StatusIcon className={`w-8 h-8 ${statusInfo.color}`} />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold text-solarized-dark3 dark:text-solarized-light">
                    {statusInfo.title}
                  </h2>
                  <p className="text-solarized-dark3 dark:text-solarized-light3">
                    {statusInfo.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-solarized-light3 dark:border-solarized-dark3">
                  <span className="text-solarized-dark3 dark:text-solarized-light3">Request Date</span>
                  <span className="font-medium text-solarized-dark3 dark:text-solarized-light">
                    {request.createdAt.toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-solarized-light3 dark:border-solarized-dark3">
                  <span className="text-solarized-dark3 dark:text-solarized-light3">Last Updated</span>
                  <span className="font-medium text-solarized-dark3 dark:text-solarized-light">
                    {request.updatedAt?.toLocaleDateString() || 'N/A'}
                  </span>
                </div>
                {request.completedAt && (
                  <div className="flex justify-between items-center py-2">
                    <span className="text-solarized-dark3 dark:text-solarized-light3">Completed</span>
                    <span className="font-medium text-solarized-green">
                      {request.completedAt.toLocaleDateString()}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </AnimationWrapper>

          {/* Details Card */}
          <AnimationWrapper delay={0.2}>
            <div className="bg-white dark:bg-solarized-dark2 rounded-xl p-8 shadow-md border border-solarized-light3 dark:border-solarized-dark3">
              <h3 className="text-xl font-heading font-bold mb-6 text-solarized-dark3 dark:text-solarized-light">
                Repair Details
              </h3>

              <div className="space-y-4">
                {request.customerName && (
                  <div className="flex justify-between items-center py-2 border-b border-solarized-light3 dark:border-solarized-dark3">
                    <span className="text-solarized-dark3 dark:text-solarized-light3">Customer</span>
                    <span className="font-medium text-solarized-dark3 dark:text-solarized-light">
                      {request.customerName}
                    </span>
                  </div>
                )}

                {request.deviceType && (
                  <div className="flex justify-between items-center py-2 border-b border-solarized-light3 dark:border-solarized-dark3">
                    <span className="text-solarized-dark3 dark:text-solarized-light3">Device Type</span>
                    <span className="font-medium text-solarized-dark3 dark:text-solarized-light">
                      {request.deviceType}
                    </span>
                  </div>
                )}

                {request.serviceType && (
                  <div className="flex justify-between items-center py-2 border-b border-solarized-light3 dark:border-solarized-dark3">
                    <span className="text-solarized-dark3 dark:text-solarized-light3">Service Type</span>
                    <span className="font-medium text-solarized-dark3 dark:text-solarized-light">
                      {request.serviceType}
                    </span>
                  </div>
                )}

                {request.issueDescription && (
                  <div className="py-2">
                    <span className="text-solarized-dark3 dark:text-solarized-light3 block mb-2">Issue Description</span>
                    <p className="text-solarized-dark3 dark:text-solarized-light3 bg-solarized-light dark:bg-solarized-dark p-3 rounded-lg">
                      {request.issueDescription}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </AnimationWrapper>
        </div>

        {/* Contact Information */}
        <AnimationWrapper delay={0.3}>
          <div className="mt-12 bg-solarized-light2 dark:bg-solarized-dark2 rounded-xl p-8 text-center">
            <h3 className="text-xl font-heading font-bold mb-4 text-solarized-dark3 dark:text-solarized-light">
              Need Help?
            </h3>
            <p className="text-solarized-dark3 dark:text-solarized-light3 mb-6">
              If you have questions about your repair, please contact us:
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a
                href="tel:626-622-0196"
                className="flex items-center text-solarized-blue hover:text-solarized-blue/80 transition"
              >
                📞 (626) 622-0196
              </a>
              <a
                href="mailto:contact@dashfixes.com"
                className="flex items-center text-solarized-blue hover:text-solarized-blue/80 transition"
              >
                ✉️ contact@dashfixes.com
              </a>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { serviceNumber } = await params;
  return {
    title: `Track Repair ${serviceNumber} | Dash Fixes`,
    description: `Track the status of your repair request ${serviceNumber} with Dash Fixes.`,
  };
}