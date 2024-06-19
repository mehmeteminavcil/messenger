export function formatChatDate(dateString: string): string {
  const date = new Date(dateString);
  const today = new Date();

  // Function to format the date as "HH:mm" (e.g., "15:30")
  function formatTime(date: Date): string {
    return `${("0" + date.getHours()).slice(-2)}:${(
      "0" + date.getMinutes()
    ).slice(-2)}`;
  }

  // Function to check if the given date is today
  function isToday(someDate: Date): boolean {
    return (
      someDate.getDate() === today.getDate() &&
      someDate.getMonth() === today.getMonth() &&
      someDate.getFullYear() === today.getFullYear()
    );
  }

  // Function to check if the given date is yesterday
  function isYesterday(someDate: Date): boolean {
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    return (
      someDate.getDate() === yesterday.getDate() &&
      someDate.getMonth() === yesterday.getMonth() &&
      someDate.getFullYear() === yesterday.getFullYear()
    );
  }

  // Always include time format
  return `${
    isToday(date)
      ? "Today"
      : isYesterday(date)
      ? "Yesterday"
      : date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
  }, ${formatTime(date)}`;
}
