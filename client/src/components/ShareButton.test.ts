import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ShareButton } from './ShareButton';

describe('ShareButton Component', () => {
  const mockUrl = 'https://example.com/article/069';
  const mockTitle = 'Test Article Title';
  const mockDescription = 'Test article description';

  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();
  });

  it('renders share button with correct text', () => {
    render(<ShareButton url={mockUrl} title={mockTitle} />);
    const button = screen.getByRole('button', { name: /share/i });
    expect(button).toBeInTheDocument();
  });

  it('displays share menu when button is clicked', async () => {
    render(<ShareButton url={mockUrl} title={mockTitle} />);
    const shareButton = screen.getByRole('button', { name: /share/i });
    
    fireEvent.click(shareButton);
    
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /linkedin/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /twitter/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /copy link/i })).toBeInTheDocument();
    });
  });

  it('hides share menu when clicking outside', async () => {
    render(
      <div>
        <ShareButton url={mockUrl} title={mockTitle} />
        <div data-testid="outside">Outside element</div>
      </div>
    );
    
    const shareButton = screen.getByRole('button', { name: /share/i });
    fireEvent.click(shareButton);
    
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /linkedin/i })).toBeInTheDocument();
    });
    
    // Click outside
    const outside = screen.getByTestId('outside');
    fireEvent.click(outside);
    
    await waitFor(() => {
      expect(screen.queryByRole('button', { name: /linkedin/i })).not.toBeInTheDocument();
    });
  });

  it('calls window.open for LinkedIn share', async () => {
    const windowOpenSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
    
    render(<ShareButton url={mockUrl} title={mockTitle} />);
    
    const shareButton = screen.getByRole('button', { name: /share/i });
    fireEvent.click(shareButton);
    
    await waitFor(() => {
      const linkedInButton = screen.getByRole('button', { name: /linkedin/i });
      fireEvent.click(linkedInButton);
    });
    
    expect(windowOpenSpy).toHaveBeenCalledWith(
      expect.stringContaining('linkedin.com'),
      '_blank',
      'width=600,height=600'
    );
    
    windowOpenSpy.mockRestore();
  });

  it('calls window.open for Twitter share', async () => {
    const windowOpenSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
    
    render(<ShareButton url={mockUrl} title={mockTitle} />);
    
    const shareButton = screen.getByRole('button', { name: /share/i });
    fireEvent.click(shareButton);
    
    await waitFor(() => {
      const twitterButton = screen.getByRole('button', { name: /twitter/i });
      fireEvent.click(twitterButton);
    });
    
    expect(windowOpenSpy).toHaveBeenCalledWith(
      expect.stringContaining('twitter.com'),
      '_blank',
      'width=600,height=600'
    );
    
    windowOpenSpy.mockRestore();
  });

  it('copies link to clipboard when Copy Link is clicked', async () => {
    const clipboardWriteTextSpy = vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue(undefined);
    
    render(<ShareButton url={mockUrl} title={mockTitle} />);
    
    const shareButton = screen.getByRole('button', { name: /share/i });
    fireEvent.click(shareButton);
    
    await waitFor(() => {
      const copyButton = screen.getByRole('button', { name: /copy link/i });
      fireEvent.click(copyButton);
    });
    
    await waitFor(() => {
      expect(clipboardWriteTextSpy).toHaveBeenCalledWith(mockUrl);
    });
    
    clipboardWriteTextSpy.mockRestore();
  });

  it('shows Copied confirmation after copying link', async () => {
    vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue(undefined);
    
    render(<ShareButton url={mockUrl} title={mockTitle} />);
    
    const shareButton = screen.getByRole('button', { name: /share/i });
    fireEvent.click(shareButton);
    
    await waitFor(() => {
      const copyButton = screen.getByRole('button', { name: /copy link/i });
      fireEvent.click(copyButton);
    });
    
    await waitFor(() => {
      expect(screen.getByText(/copied/i)).toBeInTheDocument();
    });
  });

  it('closes menu after successful share action', async () => {
    vi.spyOn(window, 'open').mockImplementation(() => null);
    
    render(<ShareButton url={mockUrl} title={mockTitle} />);
    
    const shareButton = screen.getByRole('button', { name: /share/i });
    fireEvent.click(shareButton);
    
    await waitFor(() => {
      const linkedInButton = screen.getByRole('button', { name: /linkedin/i });
      fireEvent.click(linkedInButton);
    });
    
    await waitFor(() => {
      expect(screen.queryByRole('button', { name: /linkedin/i })).not.toBeInTheDocument();
    });
  });

  it('handles clipboard write errors gracefully', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(navigator.clipboard, 'writeText').mockRejectedValue(new Error('Clipboard error'));
    
    render(<ShareButton url={mockUrl} title={mockTitle} />);
    
    const shareButton = screen.getByRole('button', { name: /share/i });
    fireEvent.click(shareButton);
    
    await waitFor(() => {
      const copyButton = screen.getByRole('button', { name: /copy link/i });
      fireEvent.click(copyButton);
    });
    
    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith('Failed to copy:', expect.any(Error));
    });
    
    consoleErrorSpy.mockRestore();
  });
});
