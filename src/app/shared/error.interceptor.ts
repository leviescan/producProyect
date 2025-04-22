import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

export const errorResponseInterceptor: HttpInterceptorFn = (req, next) =>
    next(req).pipe(catchError(handleErrorResponse));

function handleErrorResponse(error: HttpErrorResponse) {
    const responseError = `Error: ${error.status}, message: ${error.message} `;
    return throwError(()=> responseError)
}
