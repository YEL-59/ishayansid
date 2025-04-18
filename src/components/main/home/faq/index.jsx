import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <>
      <div className="bg-[#fffcf4] p-15">
        <h1 className="text-4xl max-w-md text-start font-bold py-20 px-4">
          Answer to your <span>naturally Ask Question</span>
        </h1>
        <Accordion
          type="single"
          defaultValue="item-1"
          collapsible
          className="space-y-4"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-medium text-lg text-primary py-4 px-6 rounded-lg hover:bg-primary/10 transition">
              Why is digital marketing important for my business?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-sm sm:text-base text-[#878C91] leading-[180%]">
              SalesRank.AI is an AI-powered platform that evaluates and ranks
              sales professionals across multiple industries. With features like
              AI-powered rankings, industry benchmarking, and skill
              verification, we help businesses identify top-performing sales
              professionals and enhance their sales strategies.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="font-medium text-primary text-lg py-4 px-6 rounded-lg hover:bg-primary/10 transition">
              How does SalesRank.AI help improve my sales team’s performance?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-sm sm:text-base text-[#878C91] leading-[180%]">
              SalesRank.AI offers real-time data and analytics to identify your
              team's strengths and areas for improvement. With these insights,
              you can make data-driven decisions to improve performance and
              sales outcomes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="font-medium text-primary text-lg py-4 px-6 rounded-lg hover:bg-primary/10 transition">
              How can I use SalesRank.AI to track and benchmark my team’s
              performance?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-sm sm:text-base text-[#878C91] leading-[180%]">
              SalesRank.AI provides clear, industry-specific benchmarks and
              performance tracking tools. With this, you can compare your team’s
              performance against top performers and identify areas to improve.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>{" "}
    </>
  );
};

export default Faq;
