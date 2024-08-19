export function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatDate(dateString: string) {
    const options: Intl.DateTimeFormatOptions = {
        month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric',
    };
    return new Date(dateString).toLocaleString('en-US', options);
};
