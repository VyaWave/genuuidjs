declare class logTracer {
    createTraceId(): string;
    createSpanId(): string;
}
declare const instanceTracer: logTracer;
export default instanceTracer;
