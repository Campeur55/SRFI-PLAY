import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CashFlowStructureProps {
  open: boolean;
  onClose: () => void;
}

const CashFlowStructure = ({ open, onClose }: CashFlowStructureProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[85vh]">
        <DialogHeader>
          <DialogTitle>Statement of Cash Flows - Structure Reference</DialogTitle>
          <DialogDescription>
            Standard format and components of a Cash Flow Statement
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[65vh] pr-4">
          <div className="space-y-4">
            <div className="border-b pb-3">
              <h3 className="font-bold text-center text-lg">Name of Company</h3>
              <p className="text-center font-semibold">Statement of Cash Flows</p>
              <p className="text-center text-sm text-muted-foreground">For the Period Ended [Date]</p>
            </div>

            <Card className="border-operating">
              <CardHeader>
                <CardTitle className="text-operating">Operating Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">
                  Cash inflows and outflows from core business operations.
                </p>
                <div className="bg-secondary/50 p-3 rounded">
                  <p className="text-xs font-semibold mb-1">Methods:</p>
                  <ul className="text-xs list-disc list-inside space-y-1">
                    <li>Direct method - shows cash receipts and payments</li>
                    <li>Indirect method - starts with net income and adjusts for non-cash items</li>
                  </ul>
                </div>
                <div className="border-t pt-2 mt-2">
                  <p className="text-sm font-semibold">
                    Net cash provided (used) by operating activities
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-investing">
              <CardHeader>
                <CardTitle className="text-investing">Investing Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">
                  Cash flows from acquisition and disposal of long-term assets and investments.
                </p>
                <div className="bg-secondary/50 p-3 rounded">
                  <p className="text-xs font-semibold mb-1">Examples:</p>
                  <ul className="text-xs list-disc list-inside space-y-1">
                    <li>Purchase or sale of property, plant, and equipment</li>
                    <li>Purchase or sale of investments</li>
                    <li>Loans made to or collected from other entities</li>
                  </ul>
                </div>
                <div className="border-t pt-2 mt-2">
                  <p className="text-sm font-semibold">
                    Net cash provided (used) by investing activities
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-financing">
              <CardHeader>
                <CardTitle className="text-financing">Financing Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">
                  Cash flows from debt, equity, and dividend transactions.
                </p>
                <div className="bg-secondary/50 p-3 rounded">
                  <p className="text-xs font-semibold mb-1">Examples:</p>
                  <ul className="text-xs list-disc list-inside space-y-1">
                    <li>Issuance or repayment of debt (bonds, notes)</li>
                    <li>Issuance or repurchase of equity (shares)</li>
                    <li>Payment of dividends</li>
                  </ul>
                </div>
                <div className="border-t pt-2 mt-2">
                  <p className="text-sm font-semibold">
                    Net cash provided (used) by financing activities
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="border-t pt-4 space-y-2 bg-accent/20 p-4 rounded">
              <div className="flex justify-between">
                <p className="font-semibold">Net increase (decrease) in cash</p>
                <p className="text-muted-foreground">$XXX</p>
              </div>
              <div className="flex justify-between text-sm">
                <p>Cash at beginning of period</p>
                <p className="text-muted-foreground">$XXX</p>
              </div>
              <div className="flex justify-between font-bold border-t pt-2">
                <p>Cash at end of period</p>
                <p>$XXX</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default CashFlowStructure;
